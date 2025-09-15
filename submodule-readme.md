# Git Submodule — кратко

Кратко: submodule — это вложенный репозиторий, в родительском фиксируется конкретный коммит. Удобно для общих библиотек: все используют одну и ту же версию.

## Добавить сабмодуль в проект
```bash
git submodule add -b main <git-url> <путь/к/сабмодулю>
git add .gitmodules <путь/к/сабмодулю>
git commit -m "Add submodule <name>"
```

## Клонирование нового проекта с сабмодулями
- С нуля:
```bash
git clone --recurse-submodules <git-url>
```
- Если уже клонировали:
```bash
git submodule update --init --recursive
```

## Если сабмодули добавили позже (для уже работающих разработчиков)
```bash
git pull
git submodule sync --recursive
git submodule update --init --recursive
# опционально, чтобы команды работали рекурсивно по умолчанию:
git config submodule.recurse true
```

## Обновление сабмодулей
- До последних коммитов отслеживаемых веток:
```bash
git submodule sync --recursive
git submodule update --remote --merge --recursive
git commit -am "Update submodules"
```
- Обновить конкретный вручную:
```bash
cd <путь/к/сабмодулю>
git fetch
git checkout <ветка|коммит>
git pull
cd -
git add <путь/к/сабмодулю>
git commit -m "Bump submodule <name>"
```

## Полезные команды
```bash
git submodule status
git submodule foreach 'git status'
git submodule update --init --recursive
```

## Пример .gitmodules
```ini
[submodule "libs/foo"]
  path = libs/foo
  url = git@github.com:org/foo.git
  branch = main
```
