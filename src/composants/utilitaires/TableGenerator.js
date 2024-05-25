import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 300,
  },
  tableTitle:{
    textAlign: "center",
    backgroundColor: "#0b4553",
    color: "#e3c04c",
    fontFamily: "'Old Standard TT', serif",
    fontSize: "1.2rem"
  }
});

const TableGenerator = ( props ) => {

  const { classes } = props;

  let products = props.data;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableTitle} colSpan={2}>{props.name}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {product.main}
              </TableCell>
              {/* <TableCell align="right">{product.accessory}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(TableGenerator);