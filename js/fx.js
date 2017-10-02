$(document).ready(function() {
    var table = $('#table-payg').DataTable( {
        //scrollY:        "300px",
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        fixedColumns:   {
            leftColumns: 2,
        },
        searching: false,
        ordering: false,
        info: false

    } );
} );