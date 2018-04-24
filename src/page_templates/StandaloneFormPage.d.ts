import * as React from 'react';

declare namespace StandaloneFormPage {
    export interface IStandaloneFormPageProps<T> extends React.HTMLProps<T> {
    }
    export type StandaloneFormPageProps = IStandaloneFormPageProps<HTMLDivElement>;
}
declare class StandaloneFormPage extends React.Component<StandaloneFormPage.StandaloneFormPageProps> { }
export = StandaloneFormPage;
