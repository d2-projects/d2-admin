import { findNodeUpper, attr } from '../util';
export default {
	data () {
		return {
			isOnCellEdge: false, // 鼠标是否在表头的两个单元格之间的边框上
			canResizeCell: false,
			initCellX: 0, // 用于计算鼠标移动的距离
			scrollLeft: 0,
			colIndex: 0, // 在表头上移动时鼠标所在列的序号,
			atLeftGivenArea: false, // 是否在表头单元格指定区域(距左侧)
			atRightGivenArea: false // 是否在表头单元格指定区域(距右侧)
		};
	},
	methods: {
		handleMousemove (e) {
			let cell = e.srcElement.tagName.toUpperCase() === 'TH' ? e.srcElement : findNodeUpper(e.srcElement, 'th');
			let cellDomRect = cell.getBoundingClientRect();
			let atLeft = (e.pageX - cellDomRect.left) < (cellDomRect.width / 2);
			let atLeftGivenArea = (cellDomRect.left + this.atLeftCellPosi) >= e.pageX;
			let atRightGivenArea = (cellDomRect.right - e.pageX) <= this.atRightCellPosi;
			let cellIndex = parseInt(attr(cell, 'data-index')); // 当前单元格的序号
			if (atLeft && cellIndex !== 0) {
				this.isOnCellEdge = (e.pageX - cellDomRect.left) <= 1 && cellIndex - 1 !== this.fixedCol;
			} else if (!atLeft && cellIndex !== this.cellNum - 1) {
				this.isOnCellEdge = (cellDomRect.right - e.pageX) <= 1 && cellIndex !== this.fixedCol;
			}
			e.atRightGivenArea = atRightGivenArea;
			e.atLeftGivenArea = atLeftGivenArea;
			this.atRightGivenArea = atRightGivenArea;
			this.atLeftGivenArea = atLeftGivenArea;
			let index = 0; // 调整表格列宽的左侧的表格的序列
			e.colIndex = cellIndex;
			this.colIndex = cellIndex;
			this.$emit('on-moving-on-header', e);
			if (this.canResizeCell) {
				if (atLeft) {
					index = cellIndex - 1;
				} else {
					index = cellIndex;
				}
				if (index === this.fixedCol) return;
				let widthLeft = this.widthArr[index] + e.pageX - this.initCellX;
				let widthRight = this.widthArr[index + 1] + this.initCellX - e.pageX;
				this.widthArr.splice(index, 2, widthLeft, widthRight);
				this.initCellX = e.pageX;
			}
		},
		handleMousedown (e) {
			e.colIndex = this.cellIndex;
			this.$emit('on-mousedown-on-header', e);
			if (this.isOnCellEdge) {
				this.canResizeCell = true;
				this.initCellX = e.pageX;
			}
		},
		canNotMove (e) {
			this.canResizeCell = false;
			e.colIndex = this.colIndex;
			e.atLeftGivenArea = this.atLeftGivenArea;
			e.atRightGivenArea = this.atRightGivenArea;
			this.$emit('on-mouseup-on-header', e);
		}
	}
};
