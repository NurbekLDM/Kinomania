import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import films from "../data/filmsdata";

const dates = ['Today 12:06', 'Yesterday 15:19', '6 Nov 23:45', '28 Oct 10:23', 'Last week']

export default function WatchedPage() {
  const watchedFilms = films.slice(0,5)
  return (
    <div >
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>Date</TableColumn>
      </TableHeader>
      <TableBody>
      { watchedFilms.map((film ,index) =>(
        <TableRow key={index}>
          <TableCell> 
            {film.title}
            </TableCell>
          <TableCell>{dates[index]}</TableCell>
        </TableRow>
      
    ))}
    </TableBody>
    </Table>
    </div>
  );
}