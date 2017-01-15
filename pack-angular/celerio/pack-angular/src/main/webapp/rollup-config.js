import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'

//paths are relative to the execution path
export default {
    entry: 'app/main-aot.js',
    dest: 'aot/dist/build.js', // output a single application bundle
    sourceMap: true,
    sourceMapFile: 'aot/dist/build.js.map',
    format: 'iife',
    plugins: [
        nodeResolve({jsnext: true, module: true}),
        commonjs({
            include: [
                'node_modules/rxjs/**',
                'node_modules/primeng/**',
                'node_modules/json.date-extensions/**'
            ],
            namedExports: {
                'node_modules/primeng/primeng.js': [
                    'ConfirmDialogModule',
                    'FileUploadModule',
                    'PanelModule',
                    'GrowlModule',
                    'MenubarModule',
                    'DialogModule',
                    'ButtonModule',
                    'AutoCompleteModule',
                    'DataTableModule',
                    'SharedModule',
                    'DropdownModule',
                    'PickListModule',
                    'CheckboxModule',
                    'TriStateCheckboxModule',
                    'InputTextModule',
                    'InputTextareaModule',
                    'CalendarModule',
                    'PasswordModule',
                    'TabViewModule',
                    'ConfirmationService'
                ]
            }
        }),
        uglify()
    ]
}
