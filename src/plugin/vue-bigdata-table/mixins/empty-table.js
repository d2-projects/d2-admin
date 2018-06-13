export default {
	methods: {
		_createEmptyData () {
			// this.$nextTick(() => {
				let rowNum = this.rowNum;
				let colNum = this.colNum;
				if (this.rowNum && this.colNum) {
					console.log(this.value.length, this.rowNum, this.colNum);
					let valueRowNum = this.value.length;
					let valueColNum = this.value[0] ? this.value[0].length : 0;
					let totalRowNum = valueRowNum + rowNum;
					let totalColNum = valueColNum + colNum;
					let value = [...this.value];
					console.log(totalRowNum, valueRowNum);
					for (let r = valueRowNum; r < totalRowNum; r++) {
						value.push([]);
						for (let c = valueColNum; c < totalColNum; c++) {
							value[r].push('');
						}
					}
					// this.
					console.log(value);
					this.$emit('input', value);
					// this.$nextTick(() => {
					// 	this._tableResize();
					// })
				}
			// });
		}
	}
};
