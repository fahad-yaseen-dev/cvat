# Definition of Done

I wrote these checks before feature code. A checked box needs a number, a command result, a test result or a link beside it. I will leave anything I cannot demonstrate unchecked and explain it below.

- [ ] COCO 2017 validation data is visible in a CVAT job with labelled boxes. Task ID, image count and evidence: ___
- [ ] The endpoint reads this task's stored annotations and returns counts by class that match an independently checked example. Expected versus actual: ___
- [ ] The CVAT page calls the endpoint and shows the counts as a graph. Screenshot or Loom time: ___
- [ ] An empty task shows an empty state; a failed request shows an error state. Evidence for both: ___
- [ ] The endpoint refuses an anonymous request and a signed-in user without access to this task. Request results: ___
- [ ] MO-1 has five raw timings, a median, a spread and a clear pass or miss. See Objectives; result: ___
- [ ] The extra filter or grouping works, and its purpose is explained. Evidence or reason unfinished: ___
- [ ] The graph updates through WebSocket and recovers after a disconnect, if attempted. Evidence or reason unfinished: ___
- [ ] The Plan has a decision record if item 10 is reached. Evidence or reason unfinished: ___
- [ ] The Git history has a Plan-only first commit, later incremental commits and exactly the three required documents in `docs/`. First commit: `60957dd`; final check: ___
- [ ] The Loom is no longer than five minutes, demonstrates the feature, follows one request through the code and answers K1–K4 from the submitted implementation without reading notes. Link, duration and code check: ___
- [ ] The PR goes from `dev-test01` to `main` within my own fork; the reply includes the PR and Loom links. Links: ___

## Unfinished work

Complete this section at the end with each unchecked item and why it was not reached.
