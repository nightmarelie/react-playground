type Item = {
  id: number;
  name: string;
};

const largeList: Item[] = [
  {
    id: 1,
    name: "test",
  },
  {
    id: 2,
    name: "test",
  },
  {
    id: 3,
    name: "test",
  },
  {
    id: 4,
    name: "test",
  },
  {
    id: 5,
    name: "test",
  },
];

function ListComponent({ item }: { item: Item }) {
  return <div>{item.name}</div>;
}

export default ListComponent;

export { largeList };

export type { Item };
