//收藏
function bookmarkit(){
	try{
	if ((typeof window.sidebar == 'object') && (typeof window.sidebar.addPanel == 'function'))
		{ 
		window.sidebar.addPanel('有色金属数据库群','http://db.cnmn.net.cn','有色金属数据库群'); 
		} 
	else
		{ 
		window.external.AddFavorite('http://db.cnmn.net.cn','有色金属数据库群'); 
		} 
	}catch(e){}
	return false;
}