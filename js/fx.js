$(document).ready(function() {
    var tablePAYG = $('#table-payg').DataTable( {
        //scrollY:        "300px",
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        fixedColumns:   {
            leftColumns: 3
        },
        searching: false,
        ordering: false,
        info: false
    });
    var tableSales = $('#table-sales').DataTable( {
        //scrollY:        "300px",
        responsive: true,
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        fixedColumns:   {
            leftColumns: 2,
            rightColumns: 2
        },
        searching: false,
        ordering: false,
        info: false
    });
} );