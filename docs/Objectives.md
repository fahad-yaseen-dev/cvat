# Objectives

CVAT base commit: `4a09e27ff869b7aebbfdb07b29c4a34904a0221d`. I set this target before writing the API.

| ID | Field | Value |
| --- | --- | --- |
| MO-1 | Measure | Total HTTP time for an authenticated GET of one task's class-count API. |
| MO-1 | Method | One warm-up, then five sequential requests for the same COCO task. Save each raw status and time; report the median and range (`max - min`). |
| MO-1 | Target | Median ≤ 500 ms. A local graph should receive its counts within half a second. |
| MO-1 | Conditions | Local Docker stack, same user and task, no import running. Record task ID and image count. |
| MO-1 | Excluded | Cold start, browser rendering, remote network, other task sizes. |

## Results

29 Oct 2026. Task 1, 500 COCO images, 3,953 stored shapes. Tested feature commit: `e30b45ecfef2ce075f69a8c804a0385369fd7051`. Host: Windows PowerShell; Docker Desktop on WSL2, 4 CPUs, 6,145,261,568 bytes (5.72 GiB) available to Docker. No import was running.

From the repository root in PowerShell:

```powershell
Get-Content scripts/benchmark_annotation_counts.py -Raw | docker exec -i cvat_server python3 /opt/cvat/manage.py shell
```

The script creates an authenticated session for the local admin account, makes one warm-up request, then times five sequential HTTP GETs to the server inside the container. It does not print credentials or include Django startup in the timings. Raw output:

```text
task_id=1 user=admin
warmup (200, 3953, 147.08766900002956)
run 1: status=200 total=3953 time_ms=74.609
run 2: status=200 total=3953 time_ms=101.302
run 3: status=200 total=3953 time_ms=98.134
run 4: status=200 total=3953 time_ms=79.416
run 5: status=200 total=3953 time_ms=75.731
median_ms=79.416 range_ms=26.694
```

The 79.416 ms median meets the pre-set 500 ms target. This measures the API response on this machine and task, not browser rendering or larger tasks.
