# Test Plasmic

### Install

Install Plasmic component sync tool:

`npm install -g @plasmicapp/cli`

Initialize and get the Plasmic project:

`plasmic sync --projects pKfeNtvsdnYFPhvQDjNPYX`

### Update changes from the Plasmic project

`plasmic sync`

### Edit React component

#### Edit the file src/components/Doggy.tsx

The props are empty when first installed from Plasmic:

```typescript
interface DoggyProps extends DefaultDoggyProps {}
```

#### Add props to DoggyProps

Example:

```typescript
interface DoggyProps extends DefaultDoggyProps {
	textBox?: { value?: string, onChange?: React.FormEventHandler<HTMLInputElement> }
	button?: { onClick?: React.MouseEventHandler<HTMLButtonElement>
}
```

Use as React component

```react
<Doggy textBox={{ value, onChange: e => setValue(e.currentTarget.value)
}} button={{ onClick: e => alert(`${value} says vov!`)}} />
```

