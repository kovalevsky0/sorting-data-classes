import { ListSorter } from "./ListSorter";
import { NumbersList } from "./NumbersList";

function main() {
  const numberSorter = new ListSorter(new NumbersList([12, 8, 13, 7, 2]));
  //const stringSorter = new ListSorter("JwPcbaK");

  numberSorter.sort();
  //stringSorter.sort();

  //console.log("numberSorterr", numberSorter.list.data);
  //console.log("stringSorter", stringSorter.list);
}

main();
