# Plan

Base CVAT commit: `4a09e27ff869b7aebbfdb07b29c4a34904a0221d`. Branch: `dev-test01`. I have eight hours of working time; unattended Docker pulls and dataset import waits are excluded by the brief.

| Time | Work |
| --- | --- |
| 1h 15m | Start CVAT, import a manageable COCO 2017 validation subset, and trace task to job to annotation to label. |
| 1h 30m | Add the Django app `test` and an API that counts annotations by class for one task. Check it against a small known case. |
| 1h 30m | Add a CVAT page and graph. Handle empty results and request errors. |
| 1h | Use CVAT's login and task permissions. Check anonymous and unauthorized requests. |
| 1h | Measure the API as described in Objectives. Add one useful filter/grouping if the core feature works. |
| 1h | Test, record evidence, update the docs, and commit each logical change. |
| 45m | Record the Loom, review the final diff, and prepare the PR and submission links. |

Items 1–4 are my first checkpoint; the brief will not assess later items until they work. I will decide the exact count definition after inspecting CVAT's models. WebSocket updates and reconnect handling are out of the initial scope because they could consume the time needed to finish and prove the core feature. If I reach item 10, I will add the decision record here. I will note any plan changes as they happen.
