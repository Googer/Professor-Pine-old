exports.up = function (knex, Promise) {
	return Promise.all([
		knex.schema.createTable('AutoAssignRole', table => {
			table.increments('id')
				.primary();

			table.integer('guildId')
				.unsigned()
				.references('id')
				.inTable('Guild')
				.onDelete('cascade');

			table.integer('roleId')
				.unsigned()
				.references('id')
				.inTable('Role')
				.onDelete('cascade');

			table.integer('aliasId')
				.unsigned()
				.references('id')
				.inTable('Alias')
				.onDelete('cascade');

			table.unique('guildId');
		}),
	])
};

exports.down = function (knex, Promise) {
	return Promise.all([
		knex.schema.dropTable('AutoAssignRole')
	])
};
