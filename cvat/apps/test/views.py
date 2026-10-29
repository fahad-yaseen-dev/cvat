from django.db.models import Count
from django.shortcuts import get_object_or_404
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from cvat.apps.engine.models import JobType, LabeledShape, Task
from cvat.apps.engine.permissions import TaskPermission


class TaskAnnotationCountsView(APIView):
    # CVAT's default authentication backends still apply; the task scope is checked below.
    permission_classes = [IsAuthenticated]

    def get(self, request, task_id):
        task = get_object_or_404(Task.objects.select_related("organization"), pk=task_id)
        if not TaskPermission.create_scope_view(request, task).check_access().allow:
            raise PermissionDenied("You do not have access to this task.")

        # One row represents one stored shape. Exclude ground-truth and replica jobs.
        rows = (
            LabeledShape.objects.filter(
                job__segment__task=task,
                job__type=JobType.ANNOTATION,
            )
            .values("label_id", "label__name")
            .annotate(count=Count("id"))
            .order_by("label__name", "label_id")
        )
        counts = [
            {"label_id": row["label_id"], "label": row["label__name"], "count": row["count"]}
            for row in rows
        ]
        return Response(
            {
                "task_id": task.id,
                "total": sum(row["count"] for row in counts),
                "counts": counts,
            }
        )
