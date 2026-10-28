# Plan: annotation counts by class

I am working from `4a09e27ff869b7aebbfdb07b29c4a34904a0221d` on my fork's `develop` branch, with my changes on `dev-test01`. My first local clone briefly pointed at upstream commit `a81ed252dce15b805d5a544116cf98005e42f257`; I synced to my fork before starting this work. The working limit is eight hours. I will exclude only unattended Docker image pulls and dataset import waits, as the brief allows.

| Time | Work |
| --- | --- |
| 1 h 15 m | Start CVAT, import as many COCO 2017 validation images as this machine handles, and trace how a task reaches its jobs, shapes and labels. |
| 1 h 30 m | Add the `test` Django app and a task endpoint that counts stored annotations by class. Check its result against a small known example before using the imported task. |
| 1 h 30 m | Add a page in CVAT that requests those counts and draws the graph. Show a useful message for an empty task and a separate message when the request fails. |
| 1 h | Reuse CVAT's login and task access rules. Demonstrate one anonymous request and one request from a user without access. |
| 1 h | Run the five timings defined in Objectives. If the first four items work, add one filter or grouping and explain the choice. |
| 1 h | Test the feature, save actual evidence, update Objectives and Definition of Done, and make small commits as the work progresses. |
| 45 m | Record a Loom of at most five minutes, check my answers against the final code, and prepare the PR and submission links. |

The API, page, graph, empty state and error state come first because the brief says items 1–4 must work before anything later is assessed. I will define precisely what an annotation count includes after checking the models in this commit, then put that definition beside the result. I plan to use CVAT's existing permission path rather than inventing a separate access rule.

I am leaving WebSocket updates and reconnect handling out of the initial scope. I will only attempt them if the earlier work, evidence and recording are complete. If I reach the decision-record item, I will add the chosen approach, the alternative I rejected and the cost of that choice here. I will note any change to this plan when it happens, rather than rewriting the original intent at the end.
