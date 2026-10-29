"""Run with: Get-Content scripts/benchmark_annotation_counts.py -Raw | docker exec -i cvat_server python3 /opt/cvat/manage.py shell"""

import json
import os
import statistics
import time
import urllib.request

from django.contrib.auth import get_user_model
from django.test import Client


task_id = int(os.environ.get("CVAT_BENCHMARK_TASK_ID", "1"))
username = os.environ.get("CVAT_BENCHMARK_USER", "admin")
user = get_user_model().objects.get(username=username)
client = Client()
client.force_login(user)
cookies = "; ".join(f"{name}={value.value}" for name, value in client.cookies.items())
url = f"http://localhost:8080/api/tasks/{task_id}/annotation-counts"


def measure():
    request = urllib.request.Request(
        url, headers={"Cookie": cookies, "Accept": "application/vnd.cvat+json"}
    )
    start = time.perf_counter()
    with urllib.request.urlopen(request, timeout=10) as response:
        body = json.load(response)
        status = response.status
    return status, body["total"], (time.perf_counter() - start) * 1000


print(f"task_id={task_id} user={username}")
print("warmup", measure())
results = [measure() for _ in range(5)]
for index, (status, total, elapsed) in enumerate(results, 1):
    print(f"run {index}: status={status} total={total} time_ms={elapsed:.3f}")
timings = [result[2] for result in results]
print(f"median_ms={statistics.median(timings):.3f} range_ms={max(timings)-min(timings):.3f}")
