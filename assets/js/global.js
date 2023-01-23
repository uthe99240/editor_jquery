let TEMPLATEBUILDER = {
    createRow : function (params) {
        let divRowElement = '<div class="wrapper w-100 newRow"><div class="d-flex justify-content-between"><div></div><div class="portlet-header">Header</div><div><i class="bi bi-file-excel-fill removeRow"></i></div></div><div class="row border"></div> </div>';
        let findRowPrevious = $("#mainContainer").find('.wrapper');
        let columnNumber = $("#columnNumber").val();
        if(findRowPrevious.length == 0){
            $("#mainContainer").append(divRowElement);
            TEMPLATEBUILDER.createColumn('newRow', columnNumber);
            
            $('.newRow').removeClass('newRow');
            if (columnNumber !== '') {
                TEMPLATEBUILDER.closeModal('createBlockModal');
            }
        }else{
            $("#mainContainer").find('.wrapper:last').after(divRowElement);
            TEMPLATEBUILDER.createColumn('newRow', columnNumber);
            $('.newRow').removeClass('newRow');
            if (columnNumber !== '') {
                TEMPLATEBUILDER.closeModal('createBlockModal');
            }
            
        }
        
    }, 
    createColumn : function (className, columnNumber) {
        if(columnNumber > 0 ){
            for (let i = 1; i <= columnNumber; i++) {
                $("."+className).find('.row').append('<div class="col p-2 border newColumn text-center"><div class="text-right"><i class="bi bi-file-excel-fill removeCol" ></i></div><div class="data border rounded">Faisal</div><div class="col-drop data border rounded">drop Zone</div><div class="data border rounded">Faisal</div><div class="col-drop data border rounded">drop Zone</div>')           
            }
        } else{
            alert("please set column number");
        } 
        TEMPLATEBUILDER.globalSortableAndDragAble();      
    },
    closeModal : function (id) {
        $("#createBlockModal").find(".btn-close").trigger('click');
    },
    // sortableInit : function () {
    //     $(".container").sortable({
    //         connectWith:['.row'],
    //         placeholder: 'place'
    //     });
    // },
    // dragableInit : function(element){
    //     $("."+element).draggable({
    //         helper: "clone",
    //         cursor: "move",
    //         containment: "document"
    //     });
    // },
    // dragableInnerInit : function(element){
    //     $("."+element).draggable({
    //         cursor: "move",
    //         containment: "document"
    //     });
    // },
    // droppableInit : function(addElement, innerElement, after){
    //         $(".col, .col *").droppable({
    //         accept: ".add-element",
    //         classes: {
    //             "ui-droppable-hover": "custom-state-hover"
    //           },
    //         drop: function(event, ui) { 
    //             if (!ui.draggable.hasClass("dropped")){
    //                 $(this).append($(ui.draggable).clone().removeClass("dropped").removeClass("add-element").addClass("inner-element border").attr("contenteditable", "true").css({"line-height" : "1.8", "min-width" : "150px", "z-index" : "1" }));
    //             }
    //             TEMPLATEBUILDER.dragableInnerInit('inner-element');
    //             $(".row").sortable({
    //                 connectWith:['.row'],
    //                 placeholder: 'place',
    //                 items:'div'
    //             });
    //         }
    //     })
    // },
    // droppableInnerInit : function(){        
    //     $(".col, .col *").droppable({
    //         accept: ".inner-element, .add-element",
    //         classes: {
    //             "ui-droppable-hover": "custom-state-hover"
    //           },
    //         drop: function(event, ui) { 
    //             console.log('$(this)', $(this));
    //             console.log('ui', $(ui.draggable));
    //           if (!ui.draggable.hasClass("dropped")){
    //             console.log('ui', $(ui));
    //             let positionCurrent = $(this).parent().position();
    //             $(this).append($(ui.draggable).removeClass("dropped").attr("contenteditable", "true").css({"line-height" : "1.8", "min-width" : "150px", "position" : "absolute", "left" : ui.offset.left, "top" : ui.offset.top }));
    //             $(ui.draggable).remove(); 
    //         }
    //         }
    //     })
    // }
    globalSortableAndDragAble : function() {
        // $('#mainContainer').sortable({ 
        //     connectWith: '#mainContainer',
        //     accept: '.row',
        //     activeClass: 'placeholder',
        //     cancel: 'input, textarea, button, select, option',
        //     connectWith: true,
        //     disabled: false,
        //     forcePlaceholderSize: false,
        //     handle: false,
        //     initialized: false,
        //     items: '.row',
        //     placeholder: 'border',
        //     placeholderTag: null,
        //     receiveHandler: '<span>demo</span>',
        //     up : '<a href="https://www.jqueryscript.net/time-clock/">date</a>'
        // }).sortable({ connectWith: '#mainContainer' }).on('sortable:start', function(e, ui) {
        // //   $(".col").addClass('fixed-height');
        // }).on('sortable:stop', function(e, ui) {
        //     // $(".col").removeClass('fixed-height');
        //   })
        // $('.col').draggable({ 
        //     // default options
        //     cancel: 'input, textarea, button, select, option',
        //     connectWith: false,
        //     cursor: 'auto',
        //     disabled: false,
        //     handle: false,
        //     initialized: false,
        //     clone: false,
        //     cloneClass: '',
        //     scope: 'default'
        // })
        // $('.row').droppable({ 
        //     // default options
        //     accept: '*',
        //     activeClass: '',
        //     disabled: false,
        //     hoverClass: '',
        //     initialized: false,
        //     scope: 'default',
        //     receiveHandler: null
            
        // })
        $("#mainContainer").sortable({
            connectWith: ".container",
            handle: ".portlet-header",
            placeholder: "portlet-placeholder ui-corner-all"
        });
    }
}
$(document).ready(function() {
    // TEMPLATEBUILDER.dragableInit("add-element");
    
});

$(document).on ("click", "#createBlock", function() {
    TEMPLATEBUILDER.createRow();
});

$(document).ready(function(){
    $(document).on("click",".newColumn",function(){
        $('.newColumn').removeClass('content-selected borderClr');
        $('.data').removeClass('content-selected borderClr');
        $(this).addClass('content-selected borderClr');
    })



    $(document).on("click",".data",function(e){
        e.stopPropagation();
        $('.newColumn').removeClass('content-selected borderClr');
        $('.data').removeClass('content-selected borderClr');
        $(this).addClass('content-selected borderClr');
    })

    $('#textLeft').click(function(){
        $('.content-selected').removeClass('text-left text-center text-right');
        $('.content-selected').find('.data').removeClass('text-center text-right text-left');
        $('.content-selected').addClass('text-left');
        $('.bi').removeClass('borderClr')
        $(this).addClass('borderClr');
    })
    $('#textCenter').click(function(){
        $('.content-selected').removeClass('text-left text-center text-right');
        $('.content-selected').find('.data').removeClass('text-center text-right text-left');
        $('.content-selected').addClass('text-center');
        $('.bi').removeClass('borderClr')
        $(this).addClass('borderClr');

    })
    $('#textRight').click(function(){
        $('.content-selected').removeClass('text-center text-left text-right');
        $('.content-selected').find('.data').removeClass('text-center text-right text-left');
        $('.content-selected').addClass('text-right');
        $('.bi').removeClass('borderClr');
        $(this).addClass('borderClr');
    })

    $(document).on("click",".removeRow",function(){
        $(this).parents('.wrapper').remove();
    })
    $(document).on("click",".removeCol",function(){
        $(this).parents('.newColumn').remove();
    })


})

