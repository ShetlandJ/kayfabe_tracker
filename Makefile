APP := $(HERE)/$(NAME)

fix:
	php ./vendor/bin/php-cs-fixer fix --config=./.php_cs
