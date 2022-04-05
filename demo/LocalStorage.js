/**
 * 如何计算localstorage的容量大小
 * 1.定义一个固定容量的字符串
 * 2.通过不断添加到localstorage中来计算出现异常
 * 3.清除localStorage的内存容量
 */
let str = '0123456789';
let temp = '';

while (str.length !== 10240) {
	str = str + '0123456789';
}

localStorage.clear();

const computedTotal = () => {
	return new Promise((resolve) => {
		const timer = setInterval(() => {
			try {
				/**
 * 如何计算localstorage的容量大小
 * 1.定义一个固定容量的字符串
 * 2.通过不断添加到localstorage中来计算出现异常
 * 3.清除localStorage的内存容量
 */
let str = '0123456789';
let temp = '';

while (str.length !== 10240) {
	str = str + '0123456789';
}

localStorage.clear();

const computedTotal = () => {
	return new Promise((resolve) => {
		const timer = setInterval(() => {
			try {
				localStorage.setItem('temp', temp);
			} catch {
				resolve(temp.length / 1024 - 10);
				clearInterval(timer)
				localStorage.clear();
			}
		})
	})
}


(async () => {
	const total = await computedTotal();
	console.log(`最大容积${total}KB`);
})()
			} catch {
				resolve(temp.length / 1024 - 10);
				clearInterval(timer)
				localStorage.clear();
			}
		})
	})
}


(async () => {
	const total = await computedTotal();
	console.log(`最大容积${total}KB`);
})()