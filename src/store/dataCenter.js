/*
 数据中心
*/
export class DataCenter {
	constructor(vue) {
		this.vue = vue;
		this.state = this.vue.$store.state;
	}

	getInfoByCube(cube, callback) {
		let info = null;
		if (cube.indexOf('g') == 0) {
			this.state.groupList.map(group => {
				if (group.groupId == cube) {
					info = group;
				}
			});
		}
		else {
			this.state.allUserList.map(person => {
				if (person.cubeId == cube) {
					info = person;
				}
			});
		}
		callback(info);
	}

	getNameByCube(cube) {
		if (null == cube) {
			return false;
		}
		let name = cube.toString();
		this.getInfoByCube(cube.toString(), (info) => {
			name = info == null || info.displayName == null || info.displayName == '' ? name : info.displayName;
			console.log('名称数据', info);
		});
		return name;
	}

	getAvatorByCube(cube) {
		if (null == cube) {
			return false;
		}
		let avator = "http://download.getcube.cn/file/download/6ac1e304-0cab-41c0-865c-cf5f8e358ff5.png";
		this.getInfoByCube(cube.toString(), (info) => {
			avator = info == null || info.avator == null || info.avator == '' ? avator : info.avator;
			console.log('头像数据', info);
		});
		return avator;
	}

	getRecentSessionById(id, callback) {
		let RSService = window.cube.getRecentSessionService();
		if(RSService){
			RSService.dbService.queryRecentById(id, (err, dbrecent)=> {
				if (null != dbrecent) {
					callback(dbrecent[0]) ;
				}else {
					callback(false);
				}
			})
		}else {
			callback(false);
		}

	}
}
