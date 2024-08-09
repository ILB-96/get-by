import { FixedSizeList as List } from "react-window";

const MenuList = (props: any) => {
  const { options, children, maxHeight, getValue } = props;
  const height = 300;
  const itemHeight = 55;

  const [value] = getValue();
  const initialOffset = options.indexOf(value) * itemHeight;

  return (
    <List
      width={207}
      height={Math.min(height, maxHeight)}
      itemCount={children.length}
      itemSize={itemHeight}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => (
        <div
          style={{
            ...style,
            overflow: "hidden",
            overscrollBehavior: "none",
          }}
        >
          <span>{children[index]}</span>
        </div>
      )}
    </List>
  );
};
export default MenuList;
