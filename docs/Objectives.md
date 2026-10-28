# Objectives

I set this target before writing the endpoint or timing it. The code starts from CVAT commit `4a09e27ff869b7aebbfdb07b29c4a34904a0221d`.

| ID | Field | Decision |
| --- | --- | --- |
| MO-1 | What I will measure | Total HTTP time for a successful, authenticated request to the per-class counts endpoint for one task. This includes local client-to-server transfer and the database query. |
| MO-1 | Method | Use the same user and COCO validation task for five sequential requests. After one warm-up request, save each command's raw HTTP status and total time. Sort the five times; report the middle value as the median and `maximum - minimum` as the spread. Check that all five responses contain the expected counts. |
| MO-1 | Target | Median at or below **500 ms**. The graph should load promptly on the same machine as the server; half a second is a useful local target without assuming that a database aggregation will be free. I will keep this target even if I miss it. |
| MO-1 | Conditions | Local Docker Compose, no import running during measurement, one signed-in user, the same task and number of imported images for every run. |
| MO-1 | Excluded | Cold start, browser drawing time, remote network latency and task sizes other than the one tested. |

## Measurement record

To fill in after running the endpoint: exact command and timestamp; CPU, physical RAM and OS; Docker allocation if relevant; task ID and imported image count; implementation commit; five unedited outputs; median, spread and result against the target. If the target is missed, I will record what I observed rather than change the target.
