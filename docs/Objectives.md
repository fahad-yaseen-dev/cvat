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

29 Oct 2026. Task 1, 500 COCO images, 3,953 stored shapes. Tested feature commit: `0c1d054c294a3f17a49d6753e69462687403c63d`. Host: Windows 10 (10.0.19045.7807), Intel Core i7-7500U, 4 logical CPUs, 12,744,626,176 bytes RAM. Docker Desktop on WSL2 had 4 CPUs and 6,145,261,568 bytes (5.72 GiB) available. No import was running.

From the repository root in PowerShell:

```powershell
Get-Content scripts/benchmark_annotation_counts.py -Raw | docker exec -i cvat_server python3 /opt/cvat/manage.py shell
```

The script creates an authenticated session for the local admin account, makes one warm-up request, then times five sequential HTTP GETs to the server inside the container. It does not print credentials or include Django startup in the timings. Raw output:

```text
task_id=1 user=admin
warmup (200, 3953, 989.7980900004768)
run 1: status=200 total=3953 time_ms=84.241
run 2: status=200 total=3953 time_ms=180.976
run 3: status=200 total=3953 time_ms=99.468
run 4: status=200 total=3953 time_ms=1929.125
run 5: status=200 total=3953 time_ms=74.736
median_ms=99.468 range_ms=1854.389
```

The 99.468 ms median meets the pre-set 500 ms target. Run 4 took 1.929 s, so latency is not consistently below the target; this run alone does not identify why. This measures the API response on this machine and task, not browser rendering or larger tasks.
