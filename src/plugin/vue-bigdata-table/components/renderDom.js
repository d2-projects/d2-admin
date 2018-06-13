export default {
	name: 'RenderCell',
	functional: true,
	props: {
		render: Function,
		backValue: [Number, Object]
	},
	render: (h, ctx) => {
		return ctx.props.render(h, ctx.props.backValue, ctx.parent);
	}
};
