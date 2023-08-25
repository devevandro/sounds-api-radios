"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeModule = void 0;
const common_1 = require("@nestjs/common");
const PlaylistController_1 = require("./youtube-api/get/getPlaylist/controllers/PlaylistController");
const GetPlaylistFactory_1 = require("../../factories/youtube/youtube-api/get/getPlaylist/GetPlaylistFactory");
const injections_1 = require("../../../providers/injections");
const SearchVideosController_1 = require("./youtube-api/get/searchVideos/controllers/SearchVideosController");
const GetPlaylistsFactory_1 = require("../../factories/youtube/youtube-api/get/getPlaylists/GetPlaylistsFactory");
const GetSugestedVideosFactory_1 = require("../../factories/youtube/youtube-api/get/getSugestedVideos/GetSugestedVideosFactory");
const GetUserChannelFactory_1 = require("../../factories/youtube/youtube-api/get/getUserChannel/GetUserChannelFactory");
const GetVideoDetailFactory_1 = require("../../factories/youtube/youtube-api/get/getVideoDetail/GetVideoDetailFactory");
const SearchVideosFactory_1 = require("../../factories/youtube/youtube-api/get/searchVideos/SearchVideosFactory");
const PlaylistsController_1 = require("./youtube-api/get/getPlaylists/controllers/PlaylistsController");
const GetSugestedVideosController_1 = require("./youtube-api/get/getSugestedVideos/controllers/GetSugestedVideosController");
const GetUserChannelController_1 = require("./youtube-api/get/getUserChannel/controllers/GetUserChannelController");
const GetVideoDetailController_1 = require("./youtube-api/get/getVideoDetail/controllers/GetVideoDetailController");
const CreatePlaylistController_1 = require("./youtube-api/post/postCreatePlaylist/controllers/CreatePlaylistController");
const PostCreatePlaylistFactory_1 = require("../../factories/youtube/youtube-api/post/postCreatePlaylist/PostCreatePlaylistFactory");
const AddPlaylistController_1 = require("./youtube-api/post/addVideoPlaylist/controllers/AddPlaylistController");
const AddVideoPlaylistFactory_1 = require("../../factories/youtube/youtube-api/post/postVideoPlaylist/AddVideoPlaylistFactory");
const DeletePlaylistController_1 = require("./youtube-api/delete/deletePlaylist/controllers/DeletePlaylistController");
const DeletePlaylistFactory_1 = require("../../factories/youtube/youtube-api/delete/deletePlaylist/DeletePlaylistFactory");
const DeletePlaylistController_2 = require("./youtube-api/delete/deleteVideoPlaylist/controllers/DeletePlaylistController");
const DeleteVideoPlaylistFactory_1 = require("../../factories/youtube/youtube-api/delete/deleteVideoPlaylist/DeleteVideoPlaylistFactory");
const UserController_1 = require("./mongo/user/controllers/UserController");
const UserFactory_1 = require("../../factories/youtube/mongo/UserFactory");
const GetUserFactory_1 = require("../../factories/youtube/mongo/GetUserFactory");
const PlaylistController_2 = require("./mongo/playlistShared/controllers/PlaylistController");
const PlaylistController_3 = require("./mongo/playlistShared/controllers/PlaylistController");
const GetPlaylistsFactory_2 = require("../../factories/youtube/mongo/GetPlaylistsFactory");
const GetPlaylistFactory_2 = require("../../factories/youtube/mongo/GetPlaylistFactory");
const DeletePlaylistFactory_2 = require("../../factories/youtube/mongo/DeletePlaylistFactory");
const CreatePlaylistFactory_1 = require("../../factories/youtube/mongo/CreatePlaylistFactory");
const WatchedController_1 = require("./mongo/watched/controllers/WatchedController");
const WatchedFactory_1 = require("../../factories/youtube/mongo/WatchedFactory");
const GetWatchedsFactory_1 = require("../../factories/youtube/mongo/GetWatchedsFactory");
const UpdatePlaylistStatusController_1 = require("./youtube-api/update/controllers/UpdatePlaylistStatusController");
const UpdatePlaylistStatusFactory_1 = require("../../factories/youtube/youtube-api/update/UpdatePlaylistStatusFactory");
const RelatedVideosFactory_1 = require("../../factories/youtube/youtube-api/get/relatedVideos/RelatedVideosFactory");
const RelatedVideosController_1 = require("./youtube-api/get/relatedVideos/controllers/RelatedVideosController");
let YoutubeModule = class YoutubeModule {
};
YoutubeModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            PlaylistController_1.PlaylistController,
            RelatedVideosController_1.RelatedVideosController,
            SearchVideosController_1.SearchVideosController,
            GetVideoDetailController_1.GetVideoDetailController,
            PlaylistsController_1.PlaylistsController,
            GetUserChannelController_1.GetUserChannelController,
            GetSugestedVideosController_1.GetSugestedVideosController,
            CreatePlaylistController_1.CreatePlaylistController,
            AddPlaylistController_1.AddVideoPlaylistController,
            DeletePlaylistController_1.DeletePlaylistController,
            DeletePlaylistController_2.DeleteVideoPlaylistController,
            UpdatePlaylistStatusController_1.UpdatePlaylistStatusController,
            UserController_1.UserController,
            UserController_1.GetUserController,
            PlaylistController_2.GetPlaylistsController,
            PlaylistController_3.GetPlaylistController,
            PlaylistController_2.CreatePlaylistSharedController,
            PlaylistController_2.DeletePlaylistSharedController,
            WatchedController_1.GetWatchedsController,
            WatchedController_1.CreateWatchedController,
        ],
        providers: [
            RelatedVideosFactory_1.RelatedVideosFactory,
            injections_1.relatedVideosProvider,
            GetPlaylistFactory_1.GetPlaylistFactory,
            injections_1.playlistProvider,
            SearchVideosFactory_1.SearchVideosFactory,
            injections_1.searchVideosProvider,
            GetVideoDetailFactory_1.GetVideoDetailFactory,
            injections_1.videoDetailProvider,
            GetPlaylistsFactory_1.GetPlaylistsFactory,
            injections_1.playlistsProvider,
            GetUserChannelFactory_1.GetUserChannelFactory,
            injections_1.userChannelProvider,
            GetSugestedVideosFactory_1.GetSugestedVideosFactory,
            injections_1.sugestedVideosProvider,
            PostCreatePlaylistFactory_1.PostCreatePlaylistFactory,
            injections_1.createPlaylistProvider,
            AddVideoPlaylistFactory_1.AddVideoPlaylistFactory,
            injections_1.addVideoPlaylistProvider,
            DeletePlaylistFactory_1.DeletePlaylistFactory,
            injections_1.deletePlaylistProvider,
            DeleteVideoPlaylistFactory_1.DeleteVideoPlaylistFactory,
            injections_1.deleteVideoPlaylistProvider,
            UpdatePlaylistStatusFactory_1.UpdatePlaylistStatusFactory,
            injections_1.updatePlaylistStatusProvider,
            UserFactory_1.UserFactory,
            GetUserFactory_1.GetUserFactory,
            injections_1.userProvider,
            GetPlaylistsFactory_2.GetPlaylistsSharedFactory,
            GetPlaylistFactory_2.GetPlaylistSharedFactory,
            CreatePlaylistFactory_1.CreatePlaylistFactory,
            DeletePlaylistFactory_2.DeletePlaylistSharedFactory,
            injections_1.playlistSharedProvider,
            GetWatchedsFactory_1.GetWatchedsFactory,
            WatchedFactory_1.WatchedFactory,
            injections_1.watchedProvider,
        ],
    })
], YoutubeModule);
exports.YoutubeModule = YoutubeModule;
//# sourceMappingURL=YoutubeModule.js.map