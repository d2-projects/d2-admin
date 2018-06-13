<template>
	<span class="sort-button-wrapper" @click="handleSort">
		<i data-sort-btn="up" :class="[currentActiveColSort && currentSortType === 'up' ? 'sort-button-item-up-active' : '']" class="sort-button-item sort-button-item-up"></i>
		<i data-sort-btn="down" :class="[currentActiveColSort && currentSortType === 'down' ? 'sort-button-item-down-active' : '']" class="sort-button-item sort-button-item-down"></i>
	</span>
</template>
<script>
import { attr } from '../util';
export default {
	name: 'sortButton',
	data () {
		return {
			sortingType: ''
		};
	},
	props: {
		colIndex: Number,
		currentSortColIndex: Number,
		currentSortType: String
	},
	computed: {
		currentActiveColSort () {
			return this.colIndex === this.currentSortColIndex;
		}
	},
	watch: {
		currentSortType (type) {
			if (this.currentSortColIndex === this.colIndex) this.sortingType = type;
		}
	},
	methods: {
		handleSort (e) {
			const sortType = attr(e.target, 'data-sort-btn');
			if (this.sortingType === sortType) {
				this.sortingType = '';
				this.$emit('on-cancel-sort');
			} else {
				this.sortingType = sortType;
				this.$emit('on-sort', this.colIndex, sortType);
			}
		}
	}
};
</script>
