# Annotation analytics plan

Base CVAT commit: `4a09e27ff869b7aebbfdb07b29c4a34904a0221d` (fork `develop`). Working branch: `dev-test01`. The goal is a task page that displays database-backed annotation counts by class and can be demonstrated on imported COCO 2017 validation data. Work time budget: 8 hours. Only the unattended Docker image pull and dataset import waits are excluded, as specified in the assessment.

| Order | Work | Budget |
| --- | --- | ---: |
| 1 | Start the local stack, import a manageable COCO validation subset, inspect the task/job/annotation model and existing UI patterns | 1 h 15 m |
| 2 | Create Django app `test`; implement and verify the task-scoped class-count API from the database | 1 h 30 m |
| 3 | Add the task analytics page and graph; handle empty data and request failure | 1 h 30 m |
| 4 | Apply CVAT login and task-access checks; demonstrate anonymous and unauthorized requests | 1 h |
| 5 | Set and measure one endpoint latency target with five runs on the sample task; add one useful filter or grouping if time permits | 1 h |
| 6 | Test the full flow, record raw evidence, update Objectives and Definition of Done, and make contained commits | 1 h |
| 7 | Record and check the five-minute Loom; prepare the pull request into this fork's `main` and submission links | 45 m |

The first four assessment items are the minimum working slice. I will finish and verify those before starting access control, measurement or a filter. I will use the existing CVAT authentication and task permission approach, and check the exact model relationships in the checked-out commit before defining what one count represents. I will keep the UI and API changes contained. Every completed item will have evidence in `docs/Definition-of-Done.md`; measurements and their exact conditions will go in `docs/Objectives.md`.

Initially skipped: WebSocket updates and reconnection (items 8–9), because they add substantial infrastructure and are lower priority than a correct, demonstrable minimum slice. I will revisit them only if the earlier items, documentation and recording are secure. If item 10 is reached, I will append a decision record here stating the approach chosen, the rejected approach and the cost of rejecting it. Any change to this plan, or unfinished item, will be recorded honestly in the final documents.
