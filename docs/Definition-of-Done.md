# Definition of Done

This checklist is written before feature code. Tick an item only after adding a concrete number, command output, test result, screenshot link, commit, or recording timestamp beside it. Leave unfinished work unchecked and explain why at the end.

- [ ] A COCO 2017 validation task opens with visible labelled boxes. Evidence: task ID, imported image count, and screenshot/link pending.
- [ ] Task-scoped API returns correct database-backed counts per class. Evidence: known expected counts and API response pending.
- [ ] CVAT web page calls the API and renders a readable graph. Evidence: live screenshot or Loom timestamp pending.
- [ ] Page handles zero annotations and a failed API request separately and clearly. Evidence: both demonstrations pending.
- [ ] Anonymous user and signed-in user without task access are refused by the endpoint. Evidence: both request status codes and responses pending.
- [ ] Endpoint speed target measured in five runs. Evidence: raw output, median, range, target outcome, and machine/commit details in `docs/Objectives.md` pending.
- [ ] One additional filter or grouping works, with its reason recorded. Evidence pending; leave unchecked if time runs out.
- [ ] WebSocket updates the graph after annotation changes. Evidence pending; initially skipped in the Plan.
- [ ] Page reconnects and recovers after a dropped WebSocket connection. Evidence pending; initially skipped in the Plan.
- [ ] If item 10 is reached, the Plan contains chosen/rejected approaches and the cost of the rejection. Evidence pending.
- [ ] Git history shows a documentation-only first commit, subsequent contained commits, and all three required files under `docs/`. Evidence: first commit `60957dd`; final history pending.
- [ ] Loom is at most five minutes, shows the running feature and request path, and answers K1–K4 accurately without reading notes. Evidence: recording link and duration pending.
- [ ] PR is from `dev-test01` into `main` on `fahad-yaseen-dev/cvat`; submission includes that PR and Loom links. Evidence pending.

## Unfinished work and reasons

To be completed at the end. An unchecked item is not a claim of completion.
