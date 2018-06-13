import Input from './input.vue';
import Button from './button.vue';
export default (h, {row, col, value, beforeSave, initRowIndex}, table) => {
	return h('div', {
		'class': 'edit-item-con'
	}, [
		h(Input, {
			'class': 'edit-item-input',
			props: {
				value: value
			},
			on: {
				input (res) {
          table.editContent = res;
				}
			}
		}),
		h('div', {
			'class': 'edit-item-btn-con'
		}, [
			h(Button, {
				'class': 'edit-btn',
				props: {
					type: 'confirm'
				},
				on: {
					click () {
            const params = {
              row,
              col,
              value: table.editContent,
              initRowIndex
            };
						if (beforeSave({ row, col, value, initRowIndex })) {
							table.$emit('on-success-save', params);
						} else {
							table.$emit('on-fail-save', params);
						}
					}
				}
			}),
			h(Button, {
				'class': 'edit-btn',
				props: {
					type: 'cancel'
				},
				on: {
					click () {
						table.$emit('on-cancel-edit');
					}
				}
			})
		])
	]);
};
