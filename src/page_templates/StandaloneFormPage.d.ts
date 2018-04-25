import * as React from 'react';

declare namespace StandaloneFormPage {
    interface IStandaloneFormPageProps<T> extends React.HTMLProps<T> {
    }
    type Props = IStandaloneFormPageProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const StandaloneFormPage: StandaloneFormPage.Component;
export = StandaloneFormPage;
