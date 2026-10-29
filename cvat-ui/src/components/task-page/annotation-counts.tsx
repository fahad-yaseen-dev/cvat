import React, { useEffect, useState } from 'react';
import Alert from 'antd/lib/alert';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Spin from 'antd/lib/spin';

type LabelCount = { label_id: number; label: string; count: number };
type CountsResponse = { task_id: number; total: number; counts: LabelCount[] };

export default function AnnotationCounts({ taskID }: { taskID: number }): JSX.Element {
    const [data, setData] = useState<CountsResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [reload, setReload] = useState(0);
    const [search, setSearch] = useState('');
    const [labelFilter, setLabelFilter] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        setError('');
        const query = labelFilter ? `?label=${encodeURIComponent(labelFilter)}` : '';
        fetch(`/api/tasks/${taskID}/annotation-counts${query}`, {
            credentials: 'same-origin',
            signal: controller.signal,
        }).then(async (response) => {
            if (!response.ok) throw new Error(`Request failed (${response.status})`);
            return response.json();
        }).then((result: CountsResponse) => {
            setData(result);
        }).catch((reason: Error) => {
            if (reason.name !== 'AbortError') setError(reason.message);
        }).finally(() => {
            if (!controller.signal.aborted) setLoading(false);
        });
        return () => controller.abort();
    }, [taskID, reload, labelFilter]);

    const counts = [...(data?.counts || [])].sort((left, right) => right.count - left.count);
    const maxCount = counts[0]?.count || 1;

    return (
        <section className='cvat-task-annotation-counts' aria-label='Annotation counts by label'>
            <div className='cvat-task-annotation-counts-heading'>
                <h2>Annotations by label</h2>
                <Button onClick={() => setReload((value) => value + 1)}>Refresh</Button>
            </div>
            <div className='cvat-task-annotation-counts-filter'>
                <Input
                    aria-label='Filter labels by name'
                    placeholder='Filter labels by name'
                    value={search}
                    maxLength={80}
                    onChange={(event) => setSearch(event.target.value)}
                    onPressEnter={() => setLabelFilter(search.trim())}
                />
                <Button onClick={() => setLabelFilter(search.trim())}>Filter</Button>
                {labelFilter && <Button onClick={() => { setSearch(''); setLabelFilter(''); }}>Clear</Button>}
            </div>
            {loading && <Spin tip='Loading annotation counts...' />}
            {!loading && error && <Alert type='error' message='Could not load annotation counts' description={error} />}
            {!loading && !error && data?.total === 0 && (
                <p>{labelFilter ? `No annotated labels match "${labelFilter}".` : 'No annotations in this task yet.'}</p>
            )}
            {!loading && !error && data && data.total > 0 && (
                <>
                    <p>{data.total.toLocaleString()} stored shapes across {counts.length} labels</p>
                    <div className='cvat-task-annotation-counts-chart'>
                        {counts.map(({ label_id: labelID, label, count }) => (
                            <div className='cvat-task-annotation-counts-row' key={labelID}>
                                <span title={label}>{label}</span>
                                <div className='cvat-task-annotation-counts-track'>
                                    <div style={{ width: `${(count / maxCount) * 100}%` }} />
                                </div>
                                <strong>{count.toLocaleString()}</strong>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}
