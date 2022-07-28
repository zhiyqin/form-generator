import './index.less';
import { Form } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Header from './Header';
import RenderItem from './Render';
import { reorder } from './utils';
import { useSelector, useDispatch } from '@/models';

function CenterRender() {
  const { form } = useSelector(state => state);
  const {
    form: { refreshFormList },
  } = useDispatch();
  const getItemStyle = (_isDragging: boolean, draggableStyle: any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: 8 * 2,
    margin: `0 0 8px 0`,

    // change background colour if dragging
    // background: isDragging ? '#f6f7ff' : '#fff',

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = () => ({
    padding: 8,
    width: '100%',
  });
  const onDragEnd = (result: any) => {
    // 拖到拖拽框之外
    if (!result.destination) {
      return;
    }
    // 对数据进行新的排序
    const items = reorder(form, result.source.index, result.destination.index);
    refreshFormList(items);
  };
  return (
    <div className="center-render">
      <Header />
      <Form className="render-container">
        {/* <Apps /> */}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {provided => (
              <div
                className="test"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle()}
              >
                {form?.map((item: any, index: number) => (
                  <Draggable
                    isDragDisabled={false}
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    draggableId={`draggableId-${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        className="graggable-item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style,
                        )}
                      >
                        <RenderItem schema={item} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Form>
    </div>
  );
}

export default CenterRender;
