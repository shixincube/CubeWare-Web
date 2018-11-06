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
		});
		return name;
	}

	getAvatarByCube(cube) {
		if (null == cube) {
			return false;
		}
		let avatar = 'https://dev.download.shixincube.cn/file/avatar/' + cube +'?imageView2/2/h/40';
		this.getInfoByCube(cube.toString(), (info) => {
			avatar = info == null || info.avatar == null || info.avatar == '' ? avatar : info.avatar;
		});
		return avatar;
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
