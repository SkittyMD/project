import { RuleSetRule } from 'webpack';

export function buildLoaders(): RuleSetRule[] {

    const typesrciptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typesrciptLoader
    ]
}