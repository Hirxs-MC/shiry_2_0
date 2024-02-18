const { EmbedBuilder }

module.exports = {
  youtube: async (message, player) => {
    let res;
    try {
      res = await player.search(search, message.author);
      if (!player)
        return message.channel.send({
          embeds: [
            new EmbedBuilder()
              .setColor(client.embedColor)
              .setTimestamp()
              .setDescription("Nothing is playing right now..."),
          ],
        });
      if (res.loadType === "LOAD_FAILED") {
        if (!player.queue.current) player.destroy();
        throw res.exception;
      }
    } catch (err) {
      return message.reply(
        `There was an error while searching: ${err.message}`
      );
    }
    switch (res.loadType) {
      case "NO_MATCHES":
        if (!player.queue.current) player.destroy();
        return message.channel.send({
          embeds: [
            new EmbedBuilder()
              .setColor(client.embedColor)
              .setTimestamp()
              .setDescription(`❌ | No matches found for - ${search}`),
          ],
        });
      case "TRACK_LOADED":
        var track = res.tracks[0];
        player.queue.add(track);
        if (!player.playing && !player.paused && !player.queue.size) {
          return player.play();
        } else {
          const thing = new EmbedBuilder()
            .setColor(client.embedColor)
            .setTimestamp()
            .setThumbnail(
              track.displayThumbnail("hqdefault") ??
                (await client.manager.getMetaThumbnail(track.uri))
            )
            .setDescription(
              `${emojiaddsong} **Added song to queue**\n[${track.title}](${
                track.uri
              }) - \`[${convertTime(track.duration)}]\``
            );
          return message.channel.send({ embeds: [thing] });
        }
      case "PLAYLIST_LOADED":
        player.queue.add(res.tracks);
        if (
          !player.playing &&
          !player.paused &&
          player.queue.totalSize === res.tracks.length
        )
          player.play();
        const thing = new EmbedBuilder()
          .setColor(client.embedColor)
          .setTimestamp()
          .setDescription(
            `${emojiplaylist} **Added playlist to queue**\n${
              res.tracks.length
            } Songs [${res.playlist.name}](${search}) - \`[${convertTime(
              res.playlist.duration
            )}]\``
          );
        return message.channel.send({ embeds: [thing] });
      case "SEARCH_RESULT":
        var track = res.tracks[0];
        player.queue.add(track);
        if (!player.playing && !player.paused && !player.queue.size) {
          return player.play();
        } else {
          const thing = new EmbedBuilder()
            .setColor(client.embedColor)
            .setTimestamp()
            .setThumbnail(
              track.displayThumbnail("hqdefault") ??
                (await client.manager.getMetaThumbnail(track.uri))
            )
            .setDescription(
              `${emojiaddsong} **Added song to queue**\n[${track.title}](${
                track.uri
              }) - \`[${convertTime(track.duration)}]\`[<@${
                track.requester.id
              }>]`
            );
          return message.channel.send({ embeds: [thing] });
        }
    }
  },
  spotify: (message, player) => {
    
  }
}