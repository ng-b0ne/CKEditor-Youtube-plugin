CKEDITOR.dialog.add('youtube',function(editor){
    var videoSize = {};
    videoSize.l = {'width':600,'height':338};
    videoSize.m = {'width':400,'height':225};
    videoSize.s = {'width':200,'height':113};

    var elemVal = [
        {
            type:'html',
            html:'<div style="font-size:1.2em;">Please enter a vaild URL.<br />'
                + 'Exp: http://www.youtube.com/watch?v=********</div>'
        },
        {
            type:'text',
            id:'youtubeUrl',
            label:'URL',
            validate:function(){
                var url = this.getValue();
                var matches1 = url.match(/^http:\/\/www\.youtube\.com\/watch\?v=([a-z|0-9|_|-]+)/i);
                var matches2 = url.match(/^http:\/\/youtu.\.be\/([a-z|0-9|_|-]+)/i);
                if (url == null || url == '') {
                    alert('Please enter a vaild URL.');
                    return false;
                } else if (!(matches1 && matches1[1]) || !(matches2 && matches2[1])) {
                    alert('The format of the URL is incorrect.');
                    return false;
                } else {
                    return true;
                }
            },
            required:true,
            commit:function(data){
                data.url = this.getValue();
                var matches1 = url.match(/^http:\/\/www\.youtube\.com\/watch\?v=([a-z|0-9|_|-]+)/i);
                var matches2 = url.match(/^http:\/\/youtu.\.be\/([a-z|0-9|_|-]+)/i);
                if ((matches1 && matches1[1])) {
                    data.videoId = matches1[1];
                } else if ((matches2 && matches2[1])) {
                    data.videoId = matches2[1];
                }
            }
        },
        {
            type:'radio',
            id:'youtubeSize',
            label:'Video Size',
            items:[
                ['600 × 338','l'],
                ['400 × 225','m'],
                ['200 × 113','s']
            ],
            'default':'l',
            commit:function(data){
                data.videoSize = this.getValue();
            }
        }
    ];

    return {
        title:'Youtube',
        minWidth:400,
        minHeight:200,
        contents :[{
            id : 'youtubePlugin',
            type : 'html',
            elements:elemVal
        }],
        onOk:function(){
            var dialog = this,data={};
            this.commitContent(data);
            var vSize = videoSize[data.videoSize];
            var scriptTag = '<iframe src="http://www.youtube.com/embed/' + data.videoId
                + ' frameborder="0" '
                + 'width="'+vSize.width+'" height="'+vSize.height+'" allowfullscreen></iframe>';
            editor.insertHtml(scriptTag);
        }
        <iframe width="560" height="315" src="http://www.youtube.com/embed/MVQ13Koi-Nc" frameborder="0" allowfullscreen></iframe>
    };
});
