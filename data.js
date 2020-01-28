
window.dataLayer = [];

$(document).ready(function(){

    var allElements = $("*[data-event]");

    $(allElements).map(function(){
        var thisEvent = $(this).data('event');
        var thisActor = $(this).data('actor');
        var thisInteraction = $(this).data('action');
        var thisProps = $(this).data('props');
        var thisContent = $(this).data('content');
        var thisLabel = $(this).data('label');

        if(typeof thisProps === "string"){
            thisProps = JSON.parse(props);
        };

        switch(thisInteraction){
            case 'submit':
                thisSubmit(this, thisEvent, thisActor, thisInteraction, thisProps);
                break;
            case 'fill':
                thisFill(this, thisEvent, thisActor, thisInteraction, thisProps);
                break;
            case 'focusout':
                thisFocusOut(this, thisEvent, thisActor, thisInteraction, thisProps);
                break;
            case 'link-click':
                thisClick(this, thisEvent, thisActor, thisInteraction, thisContent, thisLabel);
                break;
        }
    })

    function windowPushFillFocusOutSubmtit(element, event, actor, interaction, props){
        if($(element).data('value') != undefined){
            props.value = $(element).val();
        }
        window.dataLayer.push({
            event: event,
            eventActor: actor,
            interactionType: interaction,
            props: props,
        })
    }

    function thisSubmit(element, event, actor, interaction, props){
        $(element).on('click', function(){
            windowPushFillFocusOutSubmtit(element, event, actor, interaction, props);
        })
    }

    function thisFill(element, event, actor, interaction, props){
        $(element).on('change', function(){
            windowPushFillFocusOutSubmtit(element, event, actor, interaction, props);
        })
    }

    function thisFocusOut(element, event, actor, interaction, props){
        $(element).on('focusout', function(){
            windowPushFillFocusOutSubmtit(element, event, actor, interaction, props);
        })
    }

    function thisClick(element, event, actor, interaction, content, label){
        $(element).on('click', function(){
            window.dataLayer.push({
                event: event,
                eventActor: actor,
                interactionType: interaction,
                content: content,
                label: label
            })
        })
    }
})