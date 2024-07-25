import { Meta, StoryObj } from '@storybook/react';
import { Main } from './main.component';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Título aqui'
  }
} as Meta;

export const Default: StoryObj = {};
