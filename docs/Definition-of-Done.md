# Definition of Done

Written before feature code. I will tick a box only with evidence beside it.

- [x] COCO validation task opens with labelled boxes. Task 1 has 500 images; boxes were checked in Job 1.
- [x] API counts match a known task. The source has 3,541 COCO objects: 3,916 polygon parts and 37 masks. CVAT stores these as 3,953 shapes, matching the API total.
- [x] CVAT page calls the API and shows a graph. Task 1 screenshot checked on 29 Oct: 3,953 shapes across 78 labels.
- [ ] Empty task and failed request show separate states. Empty API response checked: HTTP 200, `total: 0`, `counts: []`; UI empty and error states still need browser checks.
- [x] Anonymous and unauthorized users are refused. Live requests: anonymous 401, unrelated user 403, admin 200. The temporary user was removed.
- [x] Five API timings, raw output, median and range recorded in Objectives. Final-code median 99.468 ms; 500 ms target met on task 1, with a 1.929 s outlier.
- [x] Extra filter/grouping works and its reason is stated. Label-name search helps find a class among 78 active labels. Live API checks: `person` 1,217 shapes; mixed-case search 1,217; no match zero. UI build passed; browser check pending.
- [ ] WebSocket update and reconnect work. Not attempted: the plan reserved the remaining time for core checks and submission. Refresh fetches current counts manually.
- [ ] Decision record added to Plan. Item 10 not reached because items 8–9 were skipped.
- [x] Three docs are under `docs/`; Git shows the Plan-only first commit (`60957dd`) and later incremental commits through `0c1d054`.
- [ ] Loom is ≤ 5 minutes and covers the live feature, request path and accurate answers to K1–K4 without reading notes. Link and duration: ___
- [ ] PR targets `main` on my fork, from `dev-test01`. PR and Loom links sent: ___

## Unfinished work

UI empty/error browser checks, WebSocket updates, reconnect, recording and PR remain. Keep these entries current before submission; do not mark a line done without evidence.
