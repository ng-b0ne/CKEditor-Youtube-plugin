CKEDITOR.plugins.add('youtube',{
    init: function(editor) {
        var pluginName = 'youtube';
        var buttonName = 'YoutubeBtn';
        CKEDITOR.dialog.add(pluginName, this.path + 'dialog.js');
        
        editor.addCommand(pluginName,{
            exec:function(editor) {
                editor.openDialog(pluginName);
            },
            modes : { wysiwyg:1 }
        });

        editor.ui.addButton(buttonName,{
            label:'Youtube',
            command:pluginName,
            icon:this.path + 'images/youtube-btn.png'
        });
    }
});
