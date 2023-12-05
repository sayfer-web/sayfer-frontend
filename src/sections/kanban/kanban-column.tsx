import { useCallback } from 'react';
import { Droppable, Draggable } from '@hello-pangea/dnd';
// @mui
import { alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// api
import {
  updateColumn,
  clearColumn,
  deleteColumn,
  createTask,
  updateTask,
  deleteTask,
} from 'src/api/kanban';
// components
import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
// types
import { IKanbanColumn, IKanbanTask } from 'src/types/kanban';
//
import KanbanTaskAdd from './kanban-task-add';
import KanbanTaskItem from './kanban-task-item';
import KanbanColumnToolBar from './kanban-column-tool-bar';
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------

type Props = {
  column: IKanbanColumn;
  tasks: Record<string, IKanbanTask>;
  index: number;
};

export default function KanbanColumn({ column, tasks, index }: Props) {

  const { t } = useLocales()

  const { enqueueSnackbar } = useSnackbar();

  const openAddTask = useBoolean();

  const handleUpdateColumn = useCallback(
    async (columnName: string) => {
      try {
        if (column.name !== columnName) {
          updateColumn(column.id, columnName);

          enqueueSnackbar(t('update_success'), {
            anchorOrigin: { vertical: 'top', horizontal: 'center' },
          });
        }
      } catch (error) {
        // console.error(error);
      }
    },
    [column.id, column.name, enqueueSnackbar]
  );

  const handleClearColumn = useCallback(async () => {
    try {
      clearColumn(column.id);
    } catch (error) {
      // console.error(error);
    }
  }, [column.id]);

  const handleDeleteColumn = useCallback(async () => {
    try {
      deleteColumn(column.id);

      enqueueSnackbar(t('delete_success'), {
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
      });
    } catch (error) {
      // console.error(error);
    }
  }, [column.id, enqueueSnackbar]);

  const handleAddTask = useCallback(
    async (taskData: IKanbanTask) => {
      try {
        createTask(column.id, taskData);

        openAddTask.onFalse();
      } catch (error) {
        // console.error(error);
      }
    },
    [column.id, openAddTask]
  );

  const handleUpdateTask = useCallback(async (taskData: IKanbanTask) => {
    try {
      updateTask(taskData);
    } catch (error) {
      // console.error(error);
    }
  }, []);

  const handleDeleteTask = useCallback(
    async (taskId: string) => {
      try {
        deleteTask(column.id, taskId);

        enqueueSnackbar(t('delete_success'), {
          anchorOrigin: { vertical: 'top', horizontal: 'center' },
        });
      } catch (error) {
        // console.error(error);
      }
    },
    [column.id, enqueueSnackbar]
  );

  const renderAddTask = (
    <Stack
      spacing={2}
      sx={{
        pb: 3,
      }}
    >
      {openAddTask.value && (
        <KanbanTaskAdd
          status={column.name}
          onAddTask={handleAddTask}
          onCloseAddTask={openAddTask.onFalse}
        />
      )}

      <Button
        fullWidth
        size="large"
        color="inherit"
        startIcon={
          <Iconify
            icon={openAddTask.value ? 'solar:close-circle-broken' : 'mingcute:add-line'}
            width={18}
            sx={{ mr: -0.5 }}
          />
        }
        onClick={openAddTask.onToggle}
        sx={{ fontSize: 14 }}
      >
        {openAddTask.value ? t('close') : t('add_task') }
      </Button>
    </Stack>
  );

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <Paper
          ref={provided.innerRef}
          {...provided.draggableProps}
          sx={{
            px: 2,
            borderRadius: 2,
            bgcolor: 'background.neutral',
            ...(snapshot.isDragging && {
              bgcolor: (theme) => alpha(theme.palette.grey[500], 0.24),
            }),
          }}
        >
          <Stack {...provided.dragHandleProps}>
            <KanbanColumnToolBar
              columnName={column.name}
              onUpdateColumn={handleUpdateColumn}
              onClearColumn={handleClearColumn}
              onDeleteColumn={handleDeleteColumn}
            />

            <Droppable droppableId={column.id} type="TASK">
              {(dropProvided) => (
                <Stack
                  ref={dropProvided.innerRef}
                  {...dropProvided.droppableProps}
                  spacing={2}
                  sx={{
                    py: 3,
                    width: 280,
                  }}
                >
                  {column.taskIds.map((taskId, taskIndex) => (
                    <KanbanTaskItem
                      key={taskId}
                      index={taskIndex}
                      task={tasks[taskId]}
                      onUpdateTask={handleUpdateTask}
                      onDeleteTask={() => handleDeleteTask(taskId)}
                    />
                  ))}
                  {dropProvided.placeholder}
                </Stack>
              )}
            </Droppable>

            {renderAddTask}
          </Stack>
        </Paper>
      )}
    </Draggable>
  );
}
