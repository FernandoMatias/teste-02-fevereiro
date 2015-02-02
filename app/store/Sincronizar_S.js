var store2 = Ext.create('Touch2Demo.store.IpSincronizar_s');
	 arquivo = store2.data.get(1);
	 if (arquivo == null){
	 link = 'app/php1/listaContatos.php';    
	 }else{
	    ip =arquivo.data.ip;	
	    link ='http://'+ip+'/php/listaContatos.php';
	}

Ext.define('Touch2Demo.store.Sincronizar_S', {
    extend: 'Ext.data.Store',
    config: {
	model: 'Touch2Demo.model.Sincronizar_M',
	proxy: {
	    type: 'ajax',
	    //url: 'php/json/listaContatos.php',
	    api: {
		create: 'app/php/criaContato.php', //CRUD
		//read : 'app/php/listaContatos.php',
		read: link,
		update: 'app/php/json/atualizaContato.php',
		destroy: 'php/json/deletaContato.php'
	    },
	    reader: {
		type: 'json', //json ou xml
		rootProperty: 'contatos'
	    },
	    writer: {
		type: 'json', //json ou xml
		root: 'contatos',
		writeAllFields: true,
		encode: true,
		allowSingle: true
	    }
	},
	autoLoad: true,
	autoSync: true	
    }
});
	