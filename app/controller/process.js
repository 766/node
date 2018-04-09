import path from 'path'
import fs from 'fs'
const file_name = 'people.json'
const file_path = __dirname + '/../../' + file_name

const self = {}

function __readFile(name) {
    let ret;
    try {
        ret = fs.readFileSync(name, { encoding: 'utf8' });
        return JSON.parse(ret);
    } catch (e) {
        console.error('read file ', name, e, ret)
        return {};
    }
}


self.information = async (mac) =>{
 	let info = __readFile(file_path);
 	return info.information[mac];
}

self.health = async (mac) =>{
	let info = __readFile(file_path);
 	let ps = info.personal[mac];
 	let people = {};
 	for(let p in ps){
 		let count = ps[p].length,total = 0;
 		for(let i in ps[p]){
 			total += parseInt(ps[p][i]);
 		}
 		people[p] = total / count;
 		console.log(total,count)
 	}
 	return people;
}

self.track = async (mac) =>{
	let info = __readFile(file_path);
	let track = info.track[mac];
	let newtrack = {};
 	let sorted = Object.keys(track).sort((a,b) => {
 		return track[a] - track[b];
 	});

 	for(let i in sorted){
 		let key = sorted[i];
 		newtrack[key] = track[key];
 	}
 	return newtrack;
}

self.hotspot = async() =>{
	let info = __readFile(file_path);
	let hotspot = info.hotspot;
	let count = 0;
	for(let key in hotspot){
		count += hotspot[key];
	}
	for(let key in hotspot){
		hotspot[key] = percentage(hotspot[key],count);
	}
	return hotspot;
}

self.rank = async(mac,item,sortby) =>{

}

self.step = async(day,sortby) => {
	let info = __readFile(file_path);
	let personal = info.personal;
	let ret = {},np = {};
 	for(let pk in personal){
 		for(let key in personal[pk]){
 			if(key !== 'step')continue;
 			np[pk] = personal[pk][key][day];
 		}
 	}

 	let sorted = Object.keys(np).sort((a,b) => {
 		if(sortby == 'desc'){
 			return np[a] - np[b];
 		}else
 			return np[b] - np[a];

 	});

 	for(let i in sorted){
 		let key = sorted[i];
 		ret[key] = np[key];
 	}

 	return ret;

}

function percentage(num, total) { 
    return (Math.round(num / total * 10000) / 100.00 + "%");// 小数点后两位百分比
}

function desc(a,b){
	return b - a;
}

function aesc(a,b){
	return a - b;
}

export default self;