# Objectives and measurements

This objective is set before implementation and before timing the endpoint. CVAT base commit: `4a09e27ff869b7aebbfdb07b29c4a34904a0221d`. Machine CPU, physical RAM, operating system, number of COCO 2017 validation images, task ID, and final implementation commit: **to be recorded from the actual run**.

| ID | Field | Entry |
| --- | --- | --- |
| MO-1 | What is measured | HTTP response time for one authenticated GET of the task's per-class annotation-count endpoint, including server processing and transfer to the local client. |
| MO-1 | How | Run five sequential requests to the same populated COCO validation task using the same signed-in user and a local command-line client. Record the tool's raw time for each complete HTTP request in seconds, along with status code, then calculate the median and range (maximum minus minimum). Confirm the responses have the expected counts. |
| MO-1 | Target | Median of five warm requests at or below **500 ms**. This is a useful target for a graph that should feel responsive when opened locally, while still requiring a measured database aggregation. |
| MO-1 | Conditions | Local Docker Compose stack, documented task/image count, same machine and account, no concurrent import or deliberate load. Run one warm-up request before the five measured requests. |
| MO-1 | Not included | First request after a cold server start, browser rendering time, other task sizes, and network access from a different machine. |

## Actual run

Pending implementation and sample-data import. Paste **all five raw tool outputs** here; do not infer or invent results. Record the exact command, timestamp, machine details, task ID, observed median and range, and whether the target was met. If it is missed, explain the observed bottleneck or limitation without changing the original target.
