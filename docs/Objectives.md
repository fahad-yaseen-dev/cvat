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

Pending. Add the exact command, five raw outputs, median, range, pass/miss, CPU, RAM, OS, task ID, image count and tested commit. Explain a miss without changing the target.
