let data;
console.log('BACKGROUND START')
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type.toLowerCase()) {
            case "set":
                console.log("SETTER")
                data = message.data;
                break;
            case "get":
                console.log('GETTER')
                sendResponse({data: data});
                break;
            default:
                console.error("Unrecognised message: ", message);
        }
    }
);
