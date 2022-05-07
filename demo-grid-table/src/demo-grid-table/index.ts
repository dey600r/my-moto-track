import { strings } from '@angular-devkit/core';
import { apply, mergeWith, Rule, SchematicContext, Tree, url, template } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function demoGridTable(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // tree.create(`${_options.name}.component.html`, 'world');
    // tree.create(`${_options.name}.component.scss`, 'world');
    // tree.create(`${_options.name}.component.ts`, 'world');
    // tree.create(`${_options.name}.component.spect.ts`, 'world');

    const sourceTemplates = url('./files');
    const sourteParam = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings
      })
    ]);
    return mergeWith(sourteParam)(tree, _context);
    //return tree;
  };
}
