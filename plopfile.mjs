export default function (plop) {
	plop.setGenerator('ui-component', {
		description: 'JSX Component',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'Component Name'
		}],
		actions: [{
			type: 'add',
			path: 'packages/ui/src/components/{{name}}.tsx',
			templateFile: 'templates/component.tsx',
      skipIfExists: true
		},
    {
			type: 'add',
      path: 'packages/ui/src/components/{{name}}.css',
			templateFile: 'templates/component.css',
      skipIfExists: true
		},
    {
			type: 'add',
      path: 'docs/stories/{{camelCase name}}.tsx',
			templateFile: 'templates/component-stories.tsx',
      skipIfExists: true
		}]
	});
  plop.setGenerator('context', {
    description: "JSX SolidJS Context",
    prompts: [{
			type: 'input',
			name: 'name',
			message: 'Context Name'
		}],
		actions: [{
			type: 'add',
      path: 'packages/ui/src/components/{{name}}.tsx',
			templateFile: 'templates/context.tsx',
      skipIfExists: true
		}]
  });
};