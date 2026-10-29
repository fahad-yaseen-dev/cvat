# Definition of Done

Written before feature code. I will tick a box only with evidence beside it.

- [x] COCO validation task opens with labelled boxes. Task 1 has 500 images; boxes were checked in Job 1.
- [x] API counts match a known task. The source has 3,541 COCO objects: 3,916 polygon parts and 37 masks. CVAT stores these as 3,953 shapes, matching the API total.
- [x] CVAT page calls the API and shows a graph. Task 1 screenshot checked on 29 Oct: 3,953 shapes across 78 labels.
- [ ] Empty task and failed request show separate states. Empty API response checked: HTTP 200, `total: 0`, `counts: []`; UI empty and error states still need browser checks.
- [x] Anonymous and unauthorized users are refused. Live requests: anonymous 401, unrelated user 403, admin 200. The temporary user was removed.
- [ ] Five API timings, raw output, median and range recorded in Objectives. Target met or missed: ___
- [ ] Extra filter/grouping works and its reason is stated. Evidence or reason unfinished: ___
- [ ] WebSocket update and reconnect work, if attempted. Evidence or reason unfinished: ___
- [ ] Decision record added to Plan, if item 10 is reached. Evidence or reason unfinished: ___
- [ ] Three docs are under `docs/`; Git shows the Plan-only first commit (`60957dd`) and later incremental commits. Final check: ___
- [ ] Loom is ≤ 5 minutes and covers the live feature, request path and accurate answers to K1–K4 without reading notes. Link and duration: ___
- [ ] PR targets `main` on my fork, from `dev-test01`. PR and Loom links sent: ___

## Unfinished work

List each unchecked item and why it stopped before submission.
