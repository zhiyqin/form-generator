import './index.less';
import Header from './Header';
import { useSelector } from '@/models';
import { Form } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Apps from './Render';

function CenterRender() {
  const state = useSelector(state => state);
  console.log('state', state.form);
  const getItemStyle = (isDragging: boolean, draggableStyle: nay) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: 8 * 2,
    margin: `0 0 8px 0`,

    // change background colour if dragging
    // background: isDragging ? '#f6f7ff' : '#fff',

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver: boolean) => ({
    padding: 8,
    width: '100%',
  });
  const onDragEnd = (result: any) => {
    // 拖到拖拽框之外
    if (!result.destination) {
      return;
    }
    // 对数据进行新的排序
    // const;
  };
  return (
    <div className="center-render">
      <Header />
      <div className="render-container">
        {/* <Apps /> */}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                className="test"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {state &&
                  state.form.map((item: any, index: number) => (
                    <Draggable
                      isDragDisabled={false}
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
                          {item._selfConfig_.label}
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default CenterRender;
