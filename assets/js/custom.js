/****dragable start****/
$( function() {
    // $( "#mainContainer" ).sortable();    
    // $(".row").sortable();
    // var opts = {
    //     containment: "parent",
    //     snapTolerance: 10,
    //     smartGuides: '.row .col:not(".selected")',
    //     beforeStart: function () {
    //         var $this = $(this);
    //         if (!$this.hasClass('selected')) {
    //             $this.siblings('.selected').removeClass('selected');
    //             $this.addClass('selected');
    //         }
    //     }
    // };

    // $('#c1 .drag')
    //     .draggable($.extend({}, opts))
    //     .resizable($.extend({ 
    //         handles: 'all' 
    // }, opts ));
  });

  
// $(document).ready(function(){
//     $(".dragable").draggable();

//     $("#mainContainer").droppable({
//         drop: handleDropEvent,
//     });

//     function handleDropEvent(event, ui){
//         console.log('ui', ui);
//         alert('Hello');
//     }

//     $( ".dragable" ).draggable({
//         cancel: "a.ui-icon",
//         revert: "invalid",
//         containment: "document",
//         helper: "clone",
//         cursor: "move"
//     });
// });

$(document).ready(function() {  
    
    // .sortable({
    //   placeholder: "sort-placer",
    //   cursor: "move",
    //   helper: function (evt, ui) {
    //     return $(ui).clone().appendTo("#mainContainer").show();
    //   }
    // });
  });

/****dragable end****/